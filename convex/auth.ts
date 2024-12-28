import GitHub from '@auth/core/providers/github';
import { convexAuth } from '@convex-dev/auth/server';

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    GitHub({
      profile(githubProfile, tokens) {
        return {
          id: githubProfile.id,
          name: githubProfile.name,
          email: githubProfile.email,
          image: githubProfile.picture,
          githubId: githubProfile.id,
        };
      },
    }),
  ],
});
