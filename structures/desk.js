import { Gear, Browser, Cookie, Globe } from "phosphor-react";
import { settings } from '../desk/settings'
import { languages } from '../languages'

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
                .title('Content')
                .child(
                    S.list()
                        .title('Languages')
                        .items([
                            ...languages.map((lan) => {
                                return S.listItem()
                                    .title(lan.id)
                                    .child(
                                        S.list()
                                            .title('Content (' + lan.id + ')')
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
                                            ])
                                    )
                                    .icon(Globe)
                            }),
                        ])
                )
                .icon(Browser),
            S.divider(),
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