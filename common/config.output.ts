import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ConfigOptions {
  id: string;
}

@ObjectType()
export class ConfigResponse {
  defaultValue: string;
  options: ConfigOptions[];
}
