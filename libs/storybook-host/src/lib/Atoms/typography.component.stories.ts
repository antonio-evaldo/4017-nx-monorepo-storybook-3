import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TypographyComponent } from '@alfabit-alura/typography';

const meta: Meta<TypographyComponent> = {
  component: TypographyComponent,
  render: (args) => ({
    props: args,
    template: `
      <ab-typography ${argsToTemplate(args)}>
        Novo conteúdo
      </ab-typography>
    `,
  }),
};

export default meta;

type Story = StoryObj<TypographyComponent>;

export const Title1: Story = {
  args: {
    variant: 'title1',
  },
};

export const Title2: Story = {
  args: {
    variant: 'title2',
  },
};

export const TextLarge: Story = {
  args: {
    variant: 'normal',
  },
};

export const TextMedium: Story = {
  args: {
    ...TextLarge.args,
    size: 'md',
  },
};

export const Title2WithMediumSize: Story = {
  args: {
    ...Title2.args,
    size: 'md',
  },
};

export const Paragraph: Story = {
  args: {
    ...TextLarge.args,
  },
  render: (args) => ({
    props: args,
    template: `
      <p>
        <ab-typography ${argsToTemplate(args)}>
          Novo conteúdo
        </ab-typography>
      </p>
    `,
  }),
};
