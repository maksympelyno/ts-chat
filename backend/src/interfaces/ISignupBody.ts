import { Gender } from "@prisma/client";

interface SignupBody {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: Gender;
}

export default SignupBody;
