import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { useNavigate } from "react-router";
import { PageDivisor } from "../components/divisor";
import { useObserver } from "../common/observer";
import { NavBar } from "../components/navbar";
import { useState } from "react";
import { Button } from "../components/button";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { Tittle_One } from "../components/texts";
import { ViewBusinessAplications } from "../requests/adminRequests";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AplicationAdmin } from "../components/aplicationAdmin";
import { clearAplications } from "../redux/adminSlice";

const OptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Line = styled.div`
    background-color: white;
    height: 0.1rem;
    width: 100%;
`

const AplicationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`


export const AdminPage = () => {
    const user = useSelector((state: RootState) => state.users.currentUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [aplications, setAplications] = useState(false);
    const adminSlice = useSelector((state: RootState) => state.admin);

    const { ref, visible } = useObserver();
    if (user.role !== 'Admin') {
        navigate('/')
    };


    return (
        <>
            <NavBar />
            <PageDivisor ref={ref} $visible={visible}>
                <Tittle_One>Admin Panel</Tittle_One>
                <OptionsContainer>
                    <Button onClick={async () => {
                        if (aplications == false) {
                            try {
                                await dispatch(ViewBusinessAplications()).then(unwrapResult);
                                toast.success('Aplications obtained!');
                                setAplications(true)
                            } catch (error: any) {
                                toast.error(error)
                            }
                        } else {
                            dispatch(clearAplications())
                        }
                    }}>View Business Aplications</Button>

                    <Button onClick={() => {

                    }}>Search User by ID</Button>

                    <Button onClick={() => {

                    }}>Search User by email</Button>
                </OptionsContainer>
                <Line />
                <AplicationsContainer>
                    {
                        adminSlice.aplications.length !== 0 && (
                            <>
                                {
                                    adminSlice.aplications.map((e) => {
                                        return (
                                            <AplicationAdmin
                                                key={e.id}
                                                id={e.id}
                                                user_id={e.user_id}
                                                name={e.name}
                                                contact={e.contact}
                                                status={e.status}
                                                theme={e.theme}
                                            />
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </AplicationsContainer>

            </PageDivisor>
        </>
    )
};