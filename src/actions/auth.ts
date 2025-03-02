// app/actions/auth.ts
'use server';

import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function syncUser(userInfo: { id: string; email: string }) {
  try {
    const existingUser = await db.select()
      .from(users)
      .where(eq(users.id, userInfo.id))
      .limit(1);
    
    if (existingUser.length > 0) {
      // Update existing user
      await db.update(users)
        .set({ 
          email: userInfo.email,
          updatedAt: new Date()
        })
        .where(eq(users.id, userInfo.id));
    } else {
      // Create new user
      await db.insert(users).values({
        id: userInfo.id,
        email: userInfo.email,
      });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error syncing user:', error);
    return { success: false, error };
  }
}