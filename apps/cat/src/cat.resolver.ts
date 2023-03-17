import { Query, Resolver } from '@nestjs/graphql';
import { ConfigResponse } from 'common/config.output';

@Resolver()
export class CatResolver {
  // This will work
  // @Query(() => String)
  @Query(() => ConfigResponse)
  async cat() {
    const a: ConfigResponse = {
      defaultValue: '',
      options: [],
    };
    return 'Cat';
  }
}
