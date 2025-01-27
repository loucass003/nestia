import typia from "typia";

import { TestValidator } from "@nestia/e2e";

import api from "@api";

export const test_api_param_number = async (
    connection: api.IConnection,
): Promise<void> => {
    const value: number = await api.functional.param.number(connection, 1);
    typia.assert(value);

    await TestValidator.httpError("boolean")(400)(() =>
        api.functional.param.number(connection, true as any),
    );
    await TestValidator.httpError("string")(400)(() =>
        api.functional.param.number(connection, "string" as any),
    );
};
