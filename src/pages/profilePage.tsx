import { useNavigate, useSearchParams } from "react-router"
import { PageDivisor, PageDivisorTwo } from "../components/divisor"
import { NavBar } from "../components/navbar"
import { Text_One, Tittle_One } from "../components/texts"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import styled from "styled-components"
import { formatUTCDate } from "../common/dateFormat"
import type { Events } from "../redux/eventsSlice"
import { EventCard } from "../components/eventCard"
import { Button } from "../components/button"
import { useAppDispatch } from "../redux/hooks"
import { useEffect } from "react"
import { fetchMe, fetchUser } from "../requests/userRequests"
import { enableModal } from "../redux/modalsSlice"

interface ProfileProps {
    id: number,
    name: string,
    role: string,
    createdAt: string,
    profilePicture: string,
    eventsCreated?: Events[],
    eventsBought?: Events[],
}

const ProfileImage = styled.img`
    object-fit: cover;
    object-position: center;
    border-radius: 100%;
    border: 0.2rem solid white;
    height: 10rem;
    width: 10rem;
`

const MainContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
`

const EventContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ProfileComponent = ({
    id,
    name,
    role,
    createdAt,
    profilePicture,
    eventsBought,
    eventsCreated
}: ProfileProps) => {
    const navigate = useNavigate();
    const me = useSelector((state: RootState) => state.users.currentUser)
    const dispatch = useAppDispatch();
    let Picture = `/userImages/default.webp`;

    if (profilePicture !== 'default'){
        Picture = `http://localhost:8000${profilePicture}`
    }
    return (
        <PageDivisorTwo>
            <MainContainer>
                {
                    id == me.id ? (
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '1.5rem', gap:'1rem' }}>
                            <ProfileImage src={Picture} />
                            <div>
                                <Button variant="secondary" onClick={()=> {
                                    dispatch(enableModal('profilePicture'))
                                }}>Change profile picture</Button>
                            </div>
                        </div>

                    ) : (
                        <ProfileImage src={Picture} />
                    )
                }
                <div>
                    <Text_One><strong>{name}</strong></Text_One>
                    <Text_One><strong>Role:</strong> {role}</Text_One>
                    <Text_One><strong>Registered At:</strong> {formatUTCDate(createdAt)}</Text_One>
                </div>
            </MainContainer>

            {eventsBought && (
                <>

                    <Tittle_One>Purchased event tickets:</Tittle_One>
                    {
                        eventsBought.length == 0
                            ? (
                                <Text_One>- - -[ You haven't bought any event tickets yet ]- - -</Text_One>
                            )
                            : (
                                <EventContainer>
                                    {eventsBought.map((e) => {
                                        return (
                                            <EventCard
                                                key={e.id}
                                                event={e}
                                            />
                                        )
                                    })}
                                </EventContainer>
                            )
                    }
                </>
            )}

            {
                eventsCreated && (
                    <>
                        <Tittle_One>Events created:</Tittle_One>
                        {
                            eventsCreated.length == 0 ? (
                                <>
                                    {
                                        id == me.id ? (
                                            <>
                                                {
                                                    role == 'Enthusiast' ? (
                                                        <>
                                                            <Text_One>- - -[ You are not able to create any event yet ]- - -</Text_One>
                                                            <div>
                                                                <Button onClick={() => {
                                                                    navigate('/applications/events_creator')
                                                                }}>Apply for create events</Button>
                                                            </div>

                                                        </>
                                                    ) : (
                                                        <>
                                                            <Text_One>- - -[ You haven't created any event yet ]- - -</Text_One>
                                                            <div>
                                                                <Button onClick={() => {
                                                                    dispatch(enableModal('createEvent'))
                                                                }}>Create your first Event</Button>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <Text_One>- - -[ This user has not yet created any events ]- - -</Text_One>
                                        )
                                    }

                                </>
                            ) : (
                                <>
                                    <EventContainer>
                                        {eventsCreated.map((e) => {
                                            return (
                                                <EventCard
                                                    key={e.id}
                                                    event={e}
                                                />
                                            )
                                        })}
                                    </EventContainer>
                                    {
                                        id == me.id && (
                                            <div>
                                                <Button onClick={() => {
                                                    dispatch(enableModal('createEvent'))
                                                }}>Create a new Event</Button>
                                            </div>
                                        )
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </PageDivisorTwo>
    )
}

export const ProfilePage = () => {
    const [searchParams] = useSearchParams();
    const me = useSelector((state: RootState) => state.users.currentUser);
    const userToSearch = searchParams.get('user');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.users.OtherUser)

    useEffect(() => {
        if (me.id === 0) {
            navigate('/')
        }
    }, [me.id, navigate])

    useEffect(() => {
        if (!userToSearch) return

        if (userToSearch === 'me') {
            dispatch(fetchMe())
            return
        }

        const userId = Number(userToSearch)

        if (
            Number.isInteger(userId) &&
            userId > 0 &&
            userId !== me.id
        ) {
            dispatch(fetchUser(userId))
        }
    }, [dispatch, userToSearch])


    if (userToSearch == 'me' || userToSearch == String(me.id)) {
        return (
            <>
                <NavBar />
                <ProfileComponent
                    id={me.id}
                    name={me.name}
                    role={me.role}
                    profilePicture={me.profilePicture}
                    createdAt={me.createdAt}
                    eventsBought={me.eventsBought || []}
                    eventsCreated={me.eventsCreated || []}
                />
            </>
        )
    }

    if (!Number.isInteger(Number(userToSearch)) || Number(userToSearch) <= 0) {
        return (
            <>
                <NavBar />
                <PageDivisor>
                    <Tittle_One>We search users by id, please use positive integers.</Tittle_One>
                </PageDivisor>
            </>
        )
    }

    return (
        <>
            <NavBar />

            <ProfileComponent
                id={user.id}
                name={user.name}
                role={user.role}
                createdAt={user.createdAt}
                profilePicture={user.profilePicture}
                eventsCreated={user.eventsCreated}
            />
        </>
    )
}