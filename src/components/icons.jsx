import {
  Braces,
  Calculator,
  Coffee,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  LayoutGrid,
  MessagesSquare,
  Server,
  Settings2,
  Sparkles,
  Target,
  Terminal,
} from "lucide-react";

const map = {
  Braces,
  Calculator,
  Coffee,
  Cpu,
  FileText,
  Globe,
  GraduationCap,
  Layers,
  LayoutGrid,
  MessagesSquare,
  Server,
  Settings2,
  Sparkles,
  Target,
  Terminal,
};

export default function Icon({ name, className = "size-5" }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
