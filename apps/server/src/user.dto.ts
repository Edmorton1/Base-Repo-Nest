import { ApiProperty } from "@nestjs/swagger";

export class IUserDTO {
	@ApiProperty()
	name: string;
}

export class IUser {
	@ApiProperty()
	id: number;

	@ApiProperty()
	name: string;
}
