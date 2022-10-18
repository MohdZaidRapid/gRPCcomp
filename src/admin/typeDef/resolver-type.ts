import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

@ObjectType()
export class stuDef {
  @Field({ nullable: true, description: 'user name' })
  readonly name: string;
  @Field({ nullable: false, description: 'user age' })
  readonly age: string;
}

@ObjectType()
export class Admin {
  @Field({ nullable: false, description: 'user id' })
  @IsString()
  readonly _id: string;

  @Field({ nullable: true, description: 'name' })
  @IsString()
  readonly name: string;

  @Field({ nullable: true, description: 'age' })
  @IsString()
  readonly age: string;

  @Field(() => stuDef, { nullable: true, description: 'user details' })
  @IsString()
  readonly userId: stuDef;
}

@ObjectType()
export class AdminDef {
  @Field({ nullable: false, description: 'user id' })
  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @Field({ nullable: true, description: 'status' })
  readonly status: boolean;
}

@ObjectType()
export class StudentDef {
  @Field({ nullable: false, description: 'message' })
  readonly message: string;

  @Field({ nullable: true, description: 'status' })
  readonly status: boolean;
}

@ObjectType()
export class AllStudentDef {
  @Field((type) => [Admin], { nullable: true })
  @IsArray()
  readonly students: Admin[];
}
