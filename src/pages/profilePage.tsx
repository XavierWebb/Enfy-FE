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
import { useTranslation } from "react-i18next"
import { useObserver } from "../common/observer"

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
    flex-wrap: wrap;

    @media(max-width: 768px){
        justify-content: center;
    }
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
    const { t } = useTranslation();
    const {ref, visible} = useObserver();
    if (profilePicture !== 'default') {
        Picture = `http://localhost:8000${profilePicture}`
    }
    return (
        <PageDivisorTwo ref={ref} $visible={visible}>
            <MainContainer>
                {
                    id == me.id ? (
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '1.5rem', gap: '1rem' }}>
                            <ProfileImage src={Picture} />
                            <div>
                                <Button variant="third" onClick={() => {
                                    dispatch(enableModal('profilePicture'))
                                }}>    {t('profile.changeProfilePictureButton')}</Button>
                            </div>
                        </div>

                    ) : (
                        <ProfileImage src={Picture} />
                    )
                }
                <div>
                    <Text_One><strong>{name}</strong></Text_One>
                    <Text_One><strong>{t('profile.role')}</strong> {role}</Text_One>
                    <Text_One><strong>{t('profile.registredAt')}</strong> {formatUTCDate(createdAt)}</Text_One>
                </div>
            </MainContainer>

            {eventsBought && (
                <>

                    <Tittle_One>{t('profile.purchasedEventTickets')}</Tittle_One>
                    {
                        eventsBought.length == 0
                            ? (
                                <Text_One>{t('profile.nothingPurchased')}</Text_One>
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
                        <Tittle_One>{t('profile.eventsCreated')}</Tittle_One>
                        {
                            eventsCreated.length == 0 ? (
                                <>
                                    {
                                        id == me.id ? (
                                            <>
                                                {
                                                    role == 'Enthusiast' ? (
                                                        <>
                                                            <Text_One>{t('profile.notAllowedToCreate')}</Text_One>
                                                            <div>
                                                                <Button onClick={() => {
                                                                    navigate('/applications/events_creator')
                                                                }}>{t('profile.applyForCreateEvents')}</Button>
                                                            </div>

                                                        </>
                                                    ) : (
                                                        <>
                                                            <Text_One>{t('profile.nothingCreatedYet')}</Text_One>
                                                            <div>
                                                                <Button onClick={() => {
                                                                    dispatch(enableModal('createEvent'))
                                                                }}>{t('profile.createYourFirstEvent')}</Button>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <Text_One>{t('profile.otherUserNotCreatedYet')}</Text_One>
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
                                                }}>{t('profile.createNewEvent')}</Button>
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
    const { t } = useTranslation();
    const {ref, visible} = useObserver();
    
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
                <PageDivisor ref={ref} $visible={visible}>
                    <Tittle_One>{t('profile.invalidUser')}</Tittle_One>
                </PageDivisor>
            </>
        )
    }

    if (user.id == 0) {
        return (
            <>
                <NavBar />
                <PageDivisor ref={ref} $visible={visible}>
                    <Tittle_One>{t('profile.userNotFound')}</Tittle_One>
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