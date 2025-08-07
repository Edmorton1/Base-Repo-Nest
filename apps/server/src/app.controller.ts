import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { PREFIX } from "@libs/shared/CONST";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { IUser, IUserDTO } from "@apps/server/user.dto";

@Controller("users")
@ApiTags("Users")
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiResponse({ status: 200, description: "Users list" })
	getHello() {
		console.log(PREFIX);
		return this.appService.getHello();
	}

	@Post()
	@ApiBody({ type: IUserDTO })
	@ApiResponse({ status: 201, description: "User created", type: IUser })
	postUser(@Body() data: IUserDTO): IUser {
		console.log(data.name);
		return { ...data, id: 1 };
	}
}
