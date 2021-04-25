/* eslint-disable import/no-webpack-loader-syntax */
import vs from 'raw-loader!./basic.vert';
import fs from 'raw-loader!./waveform.frag';
import { RefObject, useEffect } from 'react';
import * as twgl from 'twgl.js';

const arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};

export const useWaveformGL = (
  canvasRef: RefObject<HTMLCanvasElement>,
  frequency = 110,
): void => {
  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext('webgl', { antialias: true, premultipliedAlpha: true })!;
    const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

    const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

    let animationRequest: number;

    // gl.clearColor(1, 255, 1, 0);

    const render: FrameRequestCallback = (time) => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      twgl.resizeCanvasToDisplaySize(canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      const uniforms = {
        time: time / 1000,
        freq: frequency,
        resolution: [gl.canvas.width, gl.canvas.height],
      };

      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      twgl.setUniforms(programInfo, uniforms);
      twgl.drawBufferInfo(gl, bufferInfo);

      animationRequest = requestAnimationFrame(render);
    };

    animationRequest = requestAnimationFrame(render);

    return function cleanupWebGL() {
      cancelAnimationFrame(animationRequest);
      if (bufferInfo.indices) gl.deleteBuffer(bufferInfo.indices);
      gl.deleteProgram(programInfo.program);
    };
  }, [canvasRef, frequency]);
};
