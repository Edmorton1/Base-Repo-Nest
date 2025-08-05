import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PREFIX } from "@libs/shared/CONST";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		console.log(PREFIX);
		return this.appService.getHello();
	}
}
