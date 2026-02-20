import { CreateEventModal } from "./createEventsModal";
import { LoginModal } from "./loginModal";
import { RegisterModal } from "./registerModal";

export const ModalsCompiler = () => {
    return(
        <>
            <RegisterModal/>
            <LoginModal/>
            <CreateEventModal/>
        </>
    )
};