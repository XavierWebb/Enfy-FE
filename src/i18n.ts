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
        },
        de: {
            buyEventModal: {
                title: 'Event kaufen',
                mastercard: 'MasterCard',
                securityNumber: 'Sicherheitsnummer',
                buy: 'Kaufen',
                cancel: 'Abbrechen'
            },

            createEventModal: {
                title: 'Event erstellen',
                name: 'Name',
                description: 'Beschreibung',
                price: 'Preis',
                ubication: 'Ort',
                cancel: 'Abbrechen',
                create: 'Erstellen'
            },

            changeProfilePicture: {
                title: 'Profilbild ändern',
                cancel: 'Abbrechen',
                change: 'Ändern'
            },

            dropdownmenu: {
                profile: 'Profil',
                changeMode: 'Modus ändern',
                logout: 'Abmelden'
            },

            home: {
                recommended: 'Empfohlen:',
                notRecommended: `[ Wir konnten kein Event finden, das für Sie interessant ist ]`,
                bam: 'Möchte Ihr Unternehmen ein Event erstellen? Bewerben Sie sich und erhalten Sie die Genehmigung, Events auf unserer Website zu erstellen.',
                businessAplication: 'Bewerbung für ein Geschäftskonto',
                apply: 'Bewerben'
            },

            profile: {
                role: 'Rolle: ',
                invalidUser: 'Wir suchen Benutzer nach ID. Bitte verwenden Sie positive Ganzzahlen.',
                registredAt: 'Registriert am: ',
                changeProfilePictureButton: 'Profilbild ändern',
                purchasedEventTickets: 'Gekaufte Event-Tickets:',
                nothingPurchased: `- - -[ Sie haben noch keine Event-Tickets gekauft ]- - -`,
                notAllowedToCreate: '- - -[ Sie sind derzeit nicht berechtigt, Events zu erstellen ]- - -',
                applyForCreateEvents: 'Bewerbung zur Event-Erstellung',
                nothingCreatedYet: `- - -[ Sie haben noch keine Events erstellt ]- - -`,
                eventsCreated: 'Erstellte Events:',
                createYourFirstEvent: 'Erstellen Sie Ihr erstes Event',
                otherUserNotCreatedYet: '- - -[ Dieser Benutzer hat noch keine Events erstellt ]- - -',
                createNewEvent: 'Neues Event erstellen',
                userNotFound: 'Der gesuchte Benutzer existiert nicht.'
            },

            viewEvent: {
                eventDay: 'Eventdatum: ',
                price: 'Eintrittspreis: ',
                description: 'Beschreibung: ',
                youAreTheOwner: `- - -[ Sie sind der Besitzer dieses Events ]- - -`,
                buyTicket: 'Ticket kaufen',
                buyAnotherTicket: 'Weiteres Ticket kaufen',
                viewTickets: 'Gekaufte Tickets anzeigen'
            },

            viewTickets: {
                notTickets: 'Sie haben keine Tickets für dieses Event gekauft',
                tickets: 'Tickets für dieses Event:'
            },

            searchPage: {
                noEvents: 'Wir haben keine Events gefunden, die zu Ihrer Suche passen',
                results: 'Ihre Ergebnisse für:'
            },
        },
        ar: {
            buyEventModal: {
                title: 'شراء الحدث',
                mastercard: 'ماستر كارد',
                securityNumber: 'رقم الأمان',
                buy: 'شراء',
                cancel: 'إلغاء'
            },

            createEventModal: {
                title: 'إنشاء حدث',
                name: 'الاسم',
                description: 'الوصف',
                price: 'السعر',
                ubication: 'الموقع',
                cancel: 'إلغاء',
                create: 'إنشاء'
            },

            changeProfilePicture: {
                title: 'تغيير صورة الملف الشخصي',
                cancel: 'إلغاء',
                change: 'تغيير'
            },

            dropdownmenu: {
                profile: 'الملف الشخصي',
                changeMode: 'تغيير الوضع',
                logout: 'تسجيل الخروج'
            },

            home: {
                recommended: 'موصى به:',
                notRecommended: `[ لم نتمكن من العثور على حدث يهمك ]`,
                bam: 'هل ترغب شركتك في إنشاء حدث؟ قدم طلبك واحصل على إذن لإنشاء حدث على موقعنا.',
                businessAplication: 'طلب حساب تجاري',
                apply: 'تقديم'
            },

            profile: {
                role: 'الدور: ',
                invalidUser: 'نبحث عن المستخدمين باستخدام المعرّف. يرجى استخدام أرقام صحيحة موجبة.',
                registredAt: 'تاريخ التسجيل: ',
                changeProfilePictureButton: 'تغيير صورة الملف الشخصي',
                purchasedEventTickets: 'تذاكر الأحداث المشتراة:',
                nothingPurchased: `- - -[ لم تقم بشراء أي تذاكر بعد ]- - -`,
                notAllowedToCreate: '- - -[ لا يُسمح لك بإنشاء أحداث في الوقت الحالي ]- - -',
                applyForCreateEvents: 'التقديم لإنشاء أحداث',
                nothingCreatedYet: `- - -[ لم تقم بإنشاء أي أحداث بعد ]- - -`,
                eventsCreated: 'الأحداث التي تم إنشاؤها:',
                createYourFirstEvent: 'أنشئ أول حدث لك',
                otherUserNotCreatedYet: '- - -[ هذا المستخدم لم ينشئ أي أحداث بعد ]- - -',
                createNewEvent: 'إنشاء حدث جديد',
                userNotFound: 'المستخدم الذي تبحث عنه غير موجود.'
            },

            viewEvent: {
                eventDay: 'تاريخ الحدث: ',
                price: 'سعر الدخول: ',
                description: 'الوصف: ',
                youAreTheOwner: `- - -[ أنت مالك هذا الحدث ]- - -`,
                buyTicket: 'شراء تذكرة',
                buyAnotherTicket: 'شراء تذكرة أخرى',
                viewTickets: 'عرض التذاكر المشتراة'
            },

            viewTickets: {
                notTickets: 'لم تقم بشراء أي تذاكر لهذا الحدث',
                tickets: 'تذاكر هذا الحدث:'
            },

            searchPage: {
                noEvents: 'لم نعثر على أي أحداث متعلقة ببحثك',
                results: 'نتائج البحث عن:'
            },
        },
        ru: {
            buyEventModal: {
                title: 'Купить мероприятие',
                mastercard: 'MasterCard',
                securityNumber: 'Код безопасности',
                buy: 'Купить',
                cancel: 'Отмена'
            },

            createEventModal: {
                title: 'Создать мероприятие',
                name: 'Название',
                description: 'Описание',
                price: 'Цена',
                ubication: 'Место проведения',
                cancel: 'Отмена',
                create: 'Создать'
            },

            changeProfilePicture: {
                title: 'Изменить фото профиля',
                cancel: 'Отмена',
                change: 'Изменить'
            },

            dropdownmenu: {
                profile: 'Профиль',
                changeMode: 'Сменить режим',
                logout: 'Выйти'
            },

            home: {
                recommended: 'Рекомендуем:',
                notRecommended: `[ Нам не удалось найти мероприятия, которые могут вас заинтересовать ]`,
                bam: 'Ваша компания хочет создать мероприятие? Подайте заявку и получите разрешение на создание мероприятий на нашем сайте.',
                businessAplication: 'Заявка на бизнес-аккаунт',
                apply: 'Подать заявку'
            },

            profile: {
                role: 'Роль: ',
                invalidUser: 'Мы ищем пользователей по ID. Пожалуйста, используйте положительные целые числа.',
                registredAt: 'Дата регистрации: ',
                changeProfilePictureButton: 'Изменить фото профиля',
                purchasedEventTickets: 'Купленные билеты:',
                nothingPurchased: `- - -[ Вы еще не приобрели ни одного билета ]- - -`,
                notAllowedToCreate: '- - -[ В настоящее время вам не разрешено создавать мероприятия ]- - -',
                applyForCreateEvents: 'Подать заявку на создание мероприятий',
                nothingCreatedYet: `- - -[ Вы еще не создали ни одного мероприятия ]- - -`,
                eventsCreated: 'Созданные мероприятия:',
                createYourFirstEvent: 'Создайте свое первое мероприятие',
                otherUserNotCreatedYet: '- - -[ Этот пользователь еще не создал ни одного мероприятия ]- - -',
                createNewEvent: 'Создать новое мероприятие',
                userNotFound: 'Пользователь, которого вы ищете, не существует.'
            },

            viewEvent: {
                eventDay: 'Дата мероприятия: ',
                price: 'Цена билета: ',
                description: 'Описание: ',
                youAreTheOwner: `- - -[ Вы являетесь владельцем этого мероприятия ]- - -`,
                buyTicket: 'Купить билет',
                buyAnotherTicket: 'Купить еще один билет',
                viewTickets: 'Посмотреть купленные билеты'
            },

            viewTickets: {
                notTickets: 'Вы не купили ни одного билета на это мероприятие',
                tickets: 'Билеты на это мероприятие:'
            },

            searchPage: {
                noEvents: 'Мы не нашли мероприятий, соответствующих вашему поиску',
                results: 'Результаты поиска для:'
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n