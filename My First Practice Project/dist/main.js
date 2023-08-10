"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const root_module_1 = require("./root.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(root_module_1.rootModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map