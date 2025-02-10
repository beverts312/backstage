import { createTemplateAction, TemplateAction } from '@backstage/plugin-scaffolder-node';
import { executeShellCommand } from '@backstage/plugin-scaffolder-node';
import { z } from 'zod';

export function createShellAction(): TemplateAction<{ command: string; args?: string[]; cwd?: string }> {
  return createTemplateAction({
    id: 'b4llz:shell:execute',
    schema: {
      input: z.object({
        command: z.string().describe('Command to execute'),
        args: z
          .array(z.string())
          .optional()
          .default([])
          .describe('Arguments to pass to the command'),
        cwd: z
          .string()
          .optional()
          .describe('Working directory to execute the command in'),
      }),
    },

    async handler(ctx) {
      await executeShellCommand({
        command: ctx.input.command,
        args: ctx.input.args || [],
        logStream: ctx.logStream,
        options: {
          cwd: `${ctx.workspacePath}/${ctx.input.cwd ? ctx.input.cwd : ''}`,
        },
      });
    },
  });
}
