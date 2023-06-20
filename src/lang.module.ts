import {AcceptLanguageResolver, I18nModule, QueryResolver} from "nestjs-i18n";
import * as path from "path";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'en',
            loaderOptions: {
                path: path.join(__dirname, '/i18n/'),
                watch: true,
            },
            resolvers: [
                {use: QueryResolver, options: ['lang']},
                AcceptLanguageResolver,
            ],
        }),
    ],
    controllers: [],
})
export class LangModule {
}
