import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                profile: {
                    role: 'Role: ',
                    invalidUser: 'We search users by id, please use positive integers.',
                    registredAt: 'Registered At: ',
                    changeProfilePictureButton: 'Change profile picture',
                    purchasedEventTickets: 'Purchased event tickets:',
                    nothingPurchased: `- - -[ You haven't bought any event tickets yet ]- - -`,
                    notAllowedToCreate: '- - -[ You are not able to create any event yet ]- - -',
                    applyForCreateEvents: 'Apply for create events',
                    nothingCreatedYet: `- - -[ You haven't created any event yet ]- - -`,
                    eventsCreated: 'Events created:',
                    createYourFirstEvent: 'Create your first Event',
                    otherUserNotCreatedYet: '- - -[ This user has not yet created any events ]- - -',
                    createNewEvent: 'Create a new Event',
                    userNotFound: 'The user you are looking for does not exist.'
                },
            },

        },
        es: {
            profile: {
                role: 'Rol: ',
                invalidUser: 'Buscamos a los usuarios por id, porfavor usa numeros enteros positivos.',
                registredAt: 'Registrado en: ',
                changeProfilePictureButton: 'Cambiar foto de perfil',
                purchasedEventTickets: 'Entradas a eventos compradas:',
                nothingPurchased: `- - -[ Aun no has comprado ninguna entrada ]- - -`,
                notAllowedToCreate: '- - -[ Aun no estas autorizado a crear eventos ]- - -',
                applyForCreateEvents: 'Apicar para crear eventos',
                nothingCreatedYet: `- - -[ Aun no has creado ningun evento ]- - -`,
                eventsCreated: 'Eventos creados:',
                createYourFirstEvent: 'Crear tu primer evento',
                otherUserNotCreatedYet: '- - -[ Este usuario aun no ha creado ningun evento ]- - -',
                createNewEvent: 'Create evento',
                userNotFound: 'El usuario que buscas no existe.'
            },
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n