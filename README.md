# Hestia Hotels - Frontend

Multi-hotel management platform frontend built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Multi-Hotel Support**: Switch between multiple hotels seamlessly
- **Authentication**: JWT-based authentication with auto token refresh
- **State Management**: React Context API for global state
- **Form Handling**: React Hook Form with Zod validation
- **API Integration**: Axios with interceptors for API calls
- **Type Safety**: Full TypeScript support
- **Code Quality**: ESLint and Prettier configured

## 📋 Prerequisites

- Node.js >= 18.x
- npm or yarn

## 🛠️ Installation

1. **Navigate to frontend directory**
   ```bash
   cd The_Hestia-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_API_VERSION=v1
   ```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
The_Hestia-Frontend/
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── (auth)/           # Auth routes (login, register)
│   │   │   ├── login/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/      # Dashboard routes
│   │   │   ├── hotels/       # Hotel selection
│   │   │   ├── [hotelId]/    # Hotel-specific routes
│   │   │   └── layout.tsx
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   ├── hotel/           # Hotel-specific components
│   │   └── common/          # Common components
│   ├── context/             # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── HotelContext.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useHotel.ts
│   ├── lib/                 # Utilities and configurations
│   │   ├── api.ts          # API client
│   │   ├── utils.ts        # Utility functions
│   │   └── constants.ts    # Constants
│   └── types/              # TypeScript types
│       ├── index.ts
│       └── api.types.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Styling

The project uses Tailwind CSS for styling with a custom color palette:

- **Primary**: Blue shades for main actions
- **Secondary**: Purple shades for secondary actions
- **Custom Theme**: Defined in `tailwind.config.ts`

### Using Components

```tsx
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <h2>Title</h2>
      </CardHeader>
      <CardBody>
        <p>Content</p>
        <Button variant="primary">Click Me</Button>
      </CardBody>
    </Card>
  );
}
```

## 🔐 Authentication

The app uses JWT tokens stored in localStorage:

```tsx
import { useAuth } from '@/hooks/useAuth';

export default function LoginForm() {
  const { login } = useAuth();

  const handleSubmit = async (email: string, password: string) => {
    await login(email, password);
  };

  return (
    // Form implementation
  );
}
```

## 🏨 Multi-Hotel Context

Access current hotel and switch between hotels:

```tsx
import { useHotel } from '@/hooks/useHotel';

export default function HotelSelector() {
  const { currentHotel, setCurrentHotel, hotels } = useHotel();

  return (
    // Hotel selector implementation
  );
}
```

## 📡 API Integration

The API client automatically handles:
- Authentication headers
- Hotel context headers
- Token refresh
- Error handling

```tsx
import { api } from '@/lib/api';

// GET request
const response = await api.get('/hotels');

// POST request
const response = await api.post('/bookings', data);
```

## 🧪 Development

### Code Formatting
```bash
npm run format
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```bash
docker build -t hestia-frontend .
docker run -p 3000:3000 hestia-frontend
```

### Manual Deployment
1. Build the application: `npm run build`
2. Start the server: `npm start`

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:5000` |
| `NEXT_PUBLIC_API_VERSION` | API version | `v1` |
| `NEXT_PUBLIC_APP_NAME` | Application name | `Hestia Hotels` |

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and formatting
4. Submit a pull request

## 📄 License

ISC

## 👥 Authors

Hestia Hotels Team
