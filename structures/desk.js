import { Gear, Browser, Cookie } from "phosphor-react";
import {settings} from '../desk/settings'


//Include here document types that dont go on the desk page
const hiddenDocTypes = listItem =>
    ![
        'page',
        'post',

        'general-settings',
        'cookie-settings'
    ].includes(listItem.getId())

export const deskStructure = (S) =>
    S.list()
        .title('Base')
        .items([
            S.listItem()
                .title('Site Settings')
                .child(
                    S.list()
                        .title('Site Settings')
                        .items([
                            S.listItem()
                                .title('General')
                                .child(
                                    S.editor()
                                        .title('General Settings')
                                        .schemaType('general-settings')
                                        .documentId('general-settings')
                                )
                                .icon(Browser),
                            S.listItem()
                                .title('Cookies')
                                .child(
                                    S.editor()
                                        .title('Cookies Settings')
                                        .schemaType('cookie-settings')
                                        .documentId('cookie-settings')
                                )
                                .icon(Cookie),
                        ])
                )
                .icon(Gear),
            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes)
        ])