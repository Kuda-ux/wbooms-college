import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const alt = 'W Booms College logo';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function og() {
  const logo = readFileSync(join(process.cwd(), 'public', 'logo.jpeg'));
  const logoBase64 = `data:image/jpeg;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '60px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.25,
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #EAB308 0%, transparent 25%), radial-gradient(circle at 80% 70%, #0D47A1 0%, transparent 25%)',
          }}
        />
        <img
          src={logoBase64}
          width='160'
          height='160'
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '32px',
            position: 'relative',
            zIndex: 1,
          }}
        />
        <h1 style={{ fontSize: 64, fontWeight: 800, margin: 0, position: 'relative', zIndex: 1 }}>
          W Booms College
        </h1>
        <p style={{ fontSize: 28, color: '#EAB308', marginTop: '16px', fontWeight: 600, position: 'relative', zIndex: 1 }}>
          Together We Light the Nation
        </p>
        <p style={{ fontSize: 20, color: '#cbd5e1', marginTop: '12px', position: 'relative', zIndex: 1 }}>
          Quality independent secondary education in Kwekwe, Zimbabwe
        </p>
      </div>
    ),
    size
  );
}
