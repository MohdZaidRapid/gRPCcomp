import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AdminDto {
  @Field({ nullable: true, description: 'name ' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'age ' })
  @IsString()
  readonly age: string;
}
