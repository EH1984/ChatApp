type User = {
  id: string;
  name: string;
};

type Message = {
  id: string;
  message: string;
};

type HandleSubmit = (e: React.FormEvent<HTMLDivElement>) => void;
type HandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

type AddMessage = (message: string) => void;
