import typia, { Primitive } from "typia";

import api from "./../../../../api";
import type { IBbsArticle } from "./../../../../api/structures/IBbsArticle";

export const test_api_bbs_$package_articles_store = async (
    connection: api.IConnection
): Promise<void> => {
    const output: Primitive<IBbsArticle> = 
        await api.functional.bbs.$package.articles.store(
            connection,
            typia.random<Primitive<string>>(),
            typia.random<Primitive<IBbsArticle.IStore>>(),
        );
    typia.assert(output);
};