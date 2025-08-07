import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import fs from "fs";
import { PREFIX } from "@libs/shared/CONST";
import { processEnvServer } from "@libs/shared/ENV";

void (async () => {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle("API")
		.setDescription("Documentation")
		.setVersion("1.0")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	fs.writeFileSync("./openapi.json", JSON.stringify(document));
	app.setGlobalPrefix(PREFIX);

	const { port, host } = processEnvServer(
		process.env["HOST"],
		process.env["PORT"],
	);
	const server = await app.listen(port, host);
	console.log("SUPER SERVER", server.address());
})();
