import { useSelector } from "react-redux";
import { NavBar } from "../components/navbar"
import { update_searchStatus } from "../redux/eventsSlice";
import { useAppDispatch } from "../redux/hooks"
import { SearchPage } from "./searchPage"
import type { RootState } from "../redux/store";
import { useEffect } from "react";

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const searchStatus = useSelector((state: RootState) => state.events.searchStatus)

    useEffect(()=>{
        dispatch(update_searchStatus(false))
    }, [dispatch])

    return (
        <>
            <NavBar />
            {
                searchStatus == false ? (
                    <>

                    </>
                ): <SearchPage />
            }

        </>
    )
}