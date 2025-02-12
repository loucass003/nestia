import typia from "typia";

import { TestValidator } from "@nestia/e2e";

import api from "@api";
import { IBbsArticle } from "@api/lib/structures/IBbsArticle";

export const test_api_status = async (
    connection: api.IConnection,
): Promise<void> => {
    TestValidator.equals("status")(300)(
        api.functional.status.random.ENCRYPTED.status!,
    );

    const article: IBbsArticle = await api.functional.status.random(connection);
    typia.assertEquals(article);
};
