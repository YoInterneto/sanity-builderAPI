// Then instead of importing directly, deconstruct from S
import { Gear, Browser, Cookie } from "phosphor-react";

export const settings = (S) => {
    return S.listItem()
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
        .icon(Gear)
}  