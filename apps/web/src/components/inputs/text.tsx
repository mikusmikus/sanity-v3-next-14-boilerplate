import { Typography } from '@components/typography';
import { cva } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  ComponentType,
  forwardRef,
  useRef,
} from 'react';
import { mergeProps, useTextField } from 'react-aria';

const inputStyles = cva(
  [
    'pl-11',
    'pr-4',
    'w-full',
    'h-14',
    'rounded-2',
    'border',
    'text-neutral-800',
  ],
  {
    variants: {
      hasError: {
        true: ['border-3 border-semantic-error-icon'],
        false: ['border border-neutral-500'],
      },
    },
  }
);

type Props = Omit<ComponentPropsWithoutRef<'input'>, 'prefix'> & {
  errorMessage?: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
  (props, forwardedRef) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const { errorMessage, className, icon: Icon, label, ...rest } = props;
    const { inputProps, errorMessageProps, labelProps } = useTextField(
      { label },
      innerRef
    );

    return (
      <div className={className}>
        <div className="relative">
          <label {...labelProps}>
            <Typography variant="p-reg-sm" className="mb-2">
              {label}
            </Typography>
          </label>
          <div className="relative">
            <Icon className="w-5 h-5 text-neutral-800 absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              {...mergeProps(inputProps, rest)}
              ref={(el) => {
                innerRef.current = el;
                if (typeof forwardedRef === 'function') {
                  forwardedRef(el);
                } else if (forwardedRef) {
                  forwardedRef.current = el;
                }
              }}
              className={inputStyles({ hasError: !!errorMessage })}
            />
          </div>
        </div>
        {errorMessage && (
          <div {...errorMessageProps} className="pt-1 flex gap-1 items-center">
            <Typography variant="p-reg-xs" className="text-semantic-error-text">
              {errorMessage}
            </Typography>
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
