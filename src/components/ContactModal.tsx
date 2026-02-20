
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Lock, Unlock, Copy, Send, Mail } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

interface ContactModalProps {
  trigger?: React.ReactNode;
}

export function ContactModal({ trigger }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const email = "jacopo" + "falcone" + "@" + "proton" + ".me"; // Simple obfuscation

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`Name: ${values.name}\n\n${values.message}`)}`;
    window.location.assign(mailtoLink);
    setIsOpen(false);
    toast.success("Email client opened!");
  }

  const handleDecrypt = () => {
    setIsDecrypted(true);
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-cyber-black border-cyber-gray/20 text-cyber-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-cyber-magenta font-display text-xl">
            <Lock className="h-5 w-5" />
            Secure Transmission
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyber-gray font-mono text-xs uppercase">Identity</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} className="bg-cyber-navy border-cyber-gray/20 focus:border-cyber-magenta text-cyber-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyber-gray font-mono text-xs uppercase">Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Project Inquiry" {...field} className="bg-cyber-navy border-cyber-gray/20 focus:border-cyber-magenta text-cyber-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyber-gray font-mono text-xs uppercase">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Brief your objective..." 
                      className="resize-none bg-cyber-navy border-cyber-gray/20 focus:border-cyber-magenta text-cyber-white min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-cyber-magenta hover:bg-cyber-magenta/80 text-white font-mono uppercase tracking-wider">
                <Send className="h-4 w-4 mr-2" />
                Transmit
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleDecrypt}
                className="flex-shrink-0 border-cyber-gray/20 hover:bg-cyber-gray/10 hover:text-cyber-magenta"
                title="Decrypt Email Address"
              >
                {isDecrypted ? <Copy className="h-4 w-4" /> : <Unlock className="h-4 w-4" />}
              </Button>
            </div>
            
            {isDecrypted && (
                <div className="text-center">
                    <p className="text-xs text-cyber-gray font-mono mt-2 select-all">{email}</p>
                </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
