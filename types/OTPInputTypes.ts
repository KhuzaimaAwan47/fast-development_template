export interface OTPInputProps {
    length?: number;
    onComplete: (otp: string) => void;
    error?: string;
  }