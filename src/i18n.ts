import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                buyEventModal: {
                    title: 'Buy Event',
                    mastercard: 'Master Card',
                    securityNumber: 'Security Number',
                    buy: 'Buy',
                    cancel: 'Cancel'
                },

                createEventModal: {
                    title: 'Create Event',
                    name: 'Name',
                    description: 'Description',
                    price: 'Price',
                    ubication: 'Ubication',
                    cancel: 'Cancel',
                    create: 'Create'
                },

                changeProfilePicture: {
                    title: 'Change Profile Picture',
                    cancel: 'Cancel',
                    change: 'Change'
                },

                dropdownmenu: {
                    profile: 'Profile',
                    changeMode: 'Change Mode',
                    logout: 'Logout'
                },

                home: {
                    recommended: 'Recommended:',
                    notRecommended: `[ We couldn't find an event that was of interest to you ]`,
                    bam: 'Your company needs to create an event? Apply and get the authorization for create an event on our website.',
                    businessAplication: 'Business Acount Aplication',
                    apply: 'Apply'
                },

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
                viewEvent: {
                    eventDay: 'Event Day: ',
                    price: 'Entry Price: ',
                    description: 'Description: ',
                    youAreTheOwner: `- - -[ You are the owner of this event ]- - -`,
                    buyTicket: 'Buy Ticket',
                    buyAnotherTicket: 'Buy another ticket',
                    viewTickets: 'View purchased tickets'
                },

                viewTickets: {
                    notTickets: 'You have not purchased any tickets for this Event',
                    tickets: 'Tickets for this event:'
                },

                searchPage: {
                    noEvents: 'We found no events related to your search',
                    results: 'Your Results for:'
                },
            },


        },
        es: {
            buyEventModal: {
                title: 'Comprar Evento',
                mastercard: 'Master Card',
                securityNumber: 'Numero de Seguridad',
                buy: 'Comprar',
                cancel: 'Cancelar'
            },

            createEventModal: {
                title: 'Crear Evento',
                name: 'Nombre',
                description: 'Descripcion',
                price: 'Precio',
                ubication: 'Ubicacion',
                cancel: 'Cancelar',
                create: 'Crear'
            },

            changeProfilePicture: {
                title: 'Cambiar Foto de Perfil',
                cancel: 'Cancelar',
                change: 'Cambiar'
            },

            dropdownmenu: {
                profile: 'Perfil',
                changeMode: 'Cambiar Modo',
                logout: 'Salir'
            },

            home: {
                recommended: 'Recomendado:',
                notRecommended: `[ No pudimos encontrar un evento de tu interes ]`,
                bam: 'Tu empresa necesita crear eventos? aplica y obten permiso para crear eventos en nuestro sitio web',
                businessAplication: 'Aplicacion para Empresas',
                apply: 'Aplicar'
            },

            profile: {
                role: 'Rol: ',
                invalidUser: 'Buscamos usuarios por id, porfavor utilizada numeros enteros positivos.',
                registredAt: 'Registrado en: ',
                changeProfilePictureButton: 'Cambiar foto de perfil',
                purchasedEventTickets: 'Entradas compradas:',
                nothingPurchased: `- - -[ No has comprado ninguna entrada aun ]- - -`,
                notAllowedToCreate: '- - -[ No estas autorizado a crear eventos aun ]- - -',
                applyForCreateEvents: 'Aplicar para obtener autorizacion',
                nothingCreatedYet: `- - -[ No has creado ningun evento aun ]- - -`,
                eventsCreated: 'Eventos creados:',
                createYourFirstEvent: 'Crear tu primer evento',
                otherUserNotCreatedYet: '- - -[ Este usuario aun no ha creado ningun evento ]- - -',
                createNewEvent: 'Crear nuevo evento',
                userNotFound: 'El usuario que buscas no existe.'
            },
            viewEvent: {
                eventDay: 'Dia del evento: ',
                price: 'Precio de la entrada: ',
                description: 'Descripcion: ',
                youAreTheOwner: `- - -[ Eres el propietario del evento ]- - -`,
                buyTicket: 'Comprar entrada',
                buyAnotherTicket: 'Comprar otra entrada',
                viewTickets: 'Ver entradas compradas'
            },

            viewTickets: {
                notTickets: 'No has comprado ninguna entrada para este evento',
                tickets: 'Entradas para este evento:'
            },

            searchPage: {
                noEvents: 'No encontramos eventos relacionados a tu busqueda',
                results: 'Tus resultados para:'
            },
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n