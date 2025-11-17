import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function RememberMe() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="remember" />
      <Label
        htmlFor="remember"
        className="text-sm font-normal cursor-pointer select-none"
      >
        Remember me for 30 days
      </Label>
    </div>
  )
}
