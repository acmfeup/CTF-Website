import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-1.5 rounded cursor-pointer transition-all duration-150 font-[var(--font-barlow-condensed)] font-extrabold italic uppercase tracking-wider",
	{
		variants: {
			variant: {
				primary: "bg-gold text-bg border-none hover:brightness-110",
				ghost:
					"bg-transparent text-white border-[1.5px] border-border hover:border-muted-text hover:text-white",
				danger:
					"bg-transparent text-red border-[1.5px] border-red hover:bg-red/10",
			},
			size: {
				default: "text-[15px] px-[22px] py-[10px]",
				sm: "text-[13px] px-4 py-[7px]",
				lg: "text-[17px] px-9 py-[13px]",
			},
			fullWidth: {
				true: "w-full",
				false: "",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
			fullWidth: false,
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export function Button({
	className,
	variant,
	size,
	fullWidth,
	asChild,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ variant, size, fullWidth, className }))}
			{...props}
		/>
	);
}
