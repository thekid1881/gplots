import bcrypt from "bcryptjs";
import { supabase } from "./supabaseClient";

export async function getUserByEmail(email) {
    const { data, error } = await supabase
        .from('users')
        .select("*")
        .eq("email", email)
        .single();
    
    if (error || !data) return null;
    return data;
}

export async function verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}