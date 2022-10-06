import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class StudentDto {
  @Field({ nullable: true, description: 'name ' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'age ' })
  @IsString()
  readonly age: string;

  @Field({ nullable: true, description: 'roll number ' })
  @IsString()
  readonly rollNo: string;
}
