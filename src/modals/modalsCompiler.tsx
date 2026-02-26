import { BuyEventModal } from "./buyEventModal";
import { CreateEventModal } from "./createEventsModal";
import { LoginModal } from "./loginModal";
import { ProfilePictureModal } from "./profilePicture";
import { RegisterModal } from "./registerModal";

export const ModalsCompiler = () => {
    return(
        <>
            <RegisterModal/>
            <LoginModal/>
            <CreateEventModal/>
            <BuyEventModal/>
            <ProfilePictureModal/>
        </>
    )
};