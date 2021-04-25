precision highp float;

#define LC vec3(0.19, 0.19, 0.27)
#define HL vec3(0.89, 0.77, 0.28)

uniform vec2 resolution;
uniform float time;
uniform float freq;

float random (in vec2 st) {
  return fract(sin(dot(st.xy,vec2(12.9898,78.233))) * 43758.5453);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define OCTAVES 6
float fbm (in vec2 st) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;
    //
    // Loop of octaves
    for (int i = 0; i < OCTAVES; i++) {
        value += amplitude * noise(st);
        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

#define TH 0.1
float plot(vec2 st, float pct){
  return  smoothstep( pct-TH, pct-TH/2., st.y) -
          smoothstep( pct+TH/2., pct+TH, st.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec2 st = uv * 2. - 1.;
  // vec3 color = BG;

  float y                = sin( 1. * st.x * 11. + time * 2. );
  if ( freq >= 220. ) y *= sin( 1. * st.x * 22. + time * 2. );
  if ( freq >= 330. ) y *= sin( 1. * st.x * 33. + time * 2. );
  if ( freq >= 440. ) y *= sin( 1. * st.x * 44. + time * 2. );
  if ( freq >= 550. ) y *= sin( 1. * st.x * 55. + time * 2. );
  if ( freq >= 660. ) y *= sin( 1. * st.x * 66. + time * 2. );

  float ends = 1. - smoothstep( 0.92, 1., pow( abs( st.x ), 0.25 ) );
  float ends2 = 1. - smoothstep( 0.8, 1., abs( st.x ) );
  float edge = 1. - smoothstep( 0.5, 1., abs(st.x));
  float amp = 0.5 * edge;
  y *= amp;

  float pixelSize = 10.;
  vec2 s = resolution / pixelSize;
  float ix = floor( st.x * s.x + 0.5 ) / s.x;
  float iy = floor( st.y * s.y + 0.5 ) / s.y;
  vec2 ist = vec2( ix, iy );
  float d = distance( iy, y );

  float pct = 1. - smoothstep( 0.1, 0.4 * ends, d );

  float r = ends2 * fbm( ist * s / 6. + time / 1. );
  float r2 = ends * fbm( ist * s * 1. + time / 5. );

  float l = plot( ist, y );
  float randomness = 0.6;
  pct = pct * smoothstep(0., 1. - randomness, r) + smoothstep( 1. - randomness, 1., r + 1. - pow( d, 0.5 ) );
  float m = ( 1. - abs( ix ) - r2 * 0.25 );

  float darkness = pct * 0.5 * r * ( 1. - smoothstep( 0.95, 1., abs( st.x ) ) );
  darkness = smoothstep( 0., 1.5 + ( 1. - ends2 ) + m + l * r, darkness * r + l * r * 0.5 );

  float mid = ( m * 0.75 + 1. - d ) * 0.5;
  mid = mid * r2 + smoothstep( 0.6, 0.9, r2 ) * r2 * 0.5;
  mid = smoothstep( 0.2, 0.4, mid ) - smoothstep( 0.6, 0.8, mid );
  mid *= r;

  float alpha = pct * darkness;
  vec4 color = vec4( LC, alpha);


  if (mid > 0.25 && alpha < 0.25) {
    color = mix(color, vec4( HL, smoothstep(0.25, 1., mid) ), smoothstep(0., 0.75, mid));
  }

  gl_FragColor = color;
}
