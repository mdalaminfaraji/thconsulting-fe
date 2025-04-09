# TH Consulting

TH Consulting is a modern web application built with Next.js that provides employment consulting services. The platform offers comprehensive solutions for employment mediation, worker assignment, and employment administration, available in both English and Croatian languages.

## Features

### 1. Multilingual Support

- Full English and Croatian language support
- Dedicated layouts for each language
- Easy language switching

### 2. Service Categories

- **Mediation in Employment**: Complete employment process handling for foreign workers
- **Assignment of Workers**: Flexible worker rental solutions for specific periods
- **Employment Administration**: Full documentation support for foreign worker employment

### 3. User Interface

- Modern and responsive design
- Interactive navigation with dropdown menus
- Service-specific detailed pages
- Contact forms for inquiries

### 4. Technical Features

- Server-side rendering with Next.js 14
- Dynamic routing for service pages
- Responsive layouts using Tailwind CSS
- Optimized images and fonts
- SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mdalaminfaraji/thconsulting-fe.git
cd thconsulting-fe
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
thconsulting/
├── src/
│   ├── app/
│   │   ├── (english-layout)/   # English version routes
│   │   ├── (main-layout)/      # Croatian version routes
│   ├── components/
│   │   ├── common/             # Shared components
│   │   ├── common-english/     # English-specific components
│   ├── styles/                 # Global styles
├── public/                     # Static assets
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
