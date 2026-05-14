import React from 'react';
import { ShieldCheck, Phone, CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export const VerificationPage: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
      if (step === 2) {
        toast.success('Verification Submitted! We will review your documents within 24 hours.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4 py-12">
      <Card className="w-full max-w-lg shadow-xl border-t-4 border-t-primary">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Identity Verification</CardTitle>
          <CardDescription>
            Complete verification to earn your trust badge and list properties.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Progress */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 relative">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 z-10 bg-background ${
                  step >= i ? 'border-primary text-primary' : 'border-muted text-muted-foreground'
                }`}>
                  {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                </div>
                <span className="text-xs font-medium">
                  {i === 1 ? 'Phone' : i === 2 ? 'NIN' : 'Review'}
                </span>
                {i < 3 && (
                  <div className={`absolute top-4 left-1/2 w-full h-0.5 -z-0 ${
                    step > i ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (WhatsApp preferred)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" className="pl-10" placeholder="+234 800 000 0000" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground flex items-start gap-2">
                <AlertCircle className="h-3 w-3 mt-0.5" />
                We will send an OTP to verify your ownership of this number.
              </p>
              <Button className="w-full" onClick={handleVerify} disabled={isLoading}>
                {isLoading ? 'Sending OTP...' : 'Send Verification Code'}
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nin">National Identification Number (NIN)</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="nin" className="pl-10" placeholder="11 digits NIN" maxLength={11} />
                </div>
              </div>
              <p className="text-xs text-muted-foreground flex items-start gap-2">
                <AlertCircle className="h-3 w-3 mt-0.5" />
                Your NIN is required by Nigerian law for property management. We encrypt and store this securely.
              </p>
              <Button className="w-full" onClick={handleVerify} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Submit NIN for Verification'}
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4 py-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold">Submission Received!</h3>
              <p className="text-muted-foreground">
                Our team is currently verifying your details. This usually takes less than 24 hours. You can still prepare your listings in the meantime.
              </p>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = '/'}>
                Back to Dashboard
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};