import { Shield, Zap, Search, Target, Code, Bug } from 'lucide-react';

export const projects = [
  {
    title: 'Sigma Rules for Cloud Threats',
    category: 'Detection Engineering',
    description: 'A comprehensive set of Sigma rules targeting AWS, Azure, and GCP attack techniques mapped to MITRE ATT&CK. Reduced false positives by 30%.',
    icon: Shield,
    color: 'from-cyan-500/20 to-blue-500/20',
    tools: ['Sigma', 'YARA', 'MITRE ATT&CK'],
  },
  {
    title: 'Phishing Triage Playbook',
    category: 'Security Automation',
    description: 'SOAR playbook automating phishing email analysis, indicator extraction, and response coordination. Reduced incidents by 35%.',
    icon: Zap,
    color: 'from-magenta-500/20 to-purple-500/20',
    tools: ['Python', 'SOAR', 'Splunk'],
  },
  {
    title: 'Infrastructure OSINT Toolkit',
    category: 'OSINT & Recon',
    description: 'Python-based toolkit for domain enumeration, subdomain discovery, and digital footprint analysis using open-source intelligence.',
    icon: Search,
    color: 'from-emerald-500/20 to-teal-500/20',
    tools: ['Python', 'Impacket', 'OSINT'],
  },
  {
    title: 'Lateral Movement Hunt',
    category: 'Threat Hunting',
    description: 'Hypothesis-driven hunt focusing on PsExec, WMI, and RDP-based lateral movement detection with adversary emulation.',
    icon: Target,
    color: 'from-orange-500/20 to-red-500/20',
    tools: ['Atomic Red Team', 'Caldera', 'SPL'],
  },
  {
    title: 'The Polymorphic Protocol Challenge',
    category: 'Purple Team',
    description: 'Advanced CTF challenge exploring polymorphic malware techniques and protocol-level evasion methods.',
    icon: Bug,
    color: 'from-violet-500/20 to-indigo-500/20',
    tools: ['C', 'Python', 'Malware Analysis'],
  },
  {
    title: 'Virtual Filesystem Challenge',
    category: 'Security Development',
    description: 'In-memory virtual filesystem supporting standard file operations while remaining independent of physical disk storage.',
    icon: Code,
    color: 'from-amber-500/20 to-yellow-500/20',
    tools: ['C', 'Systems Programming'],
  },
];
