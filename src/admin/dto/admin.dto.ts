import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class AdminDto {
  @Field({ nullable: true, description: 'name ' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'age ' })
  @IsString()
  readonly age: string;
}

@InputType()
export class GetStudentDto {
  @Field({ nullable: true, description: 'GetAllStudents' })
  @IsString()
  @IsOptional()
  readonly name: string;
}
