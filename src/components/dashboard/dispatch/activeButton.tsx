// ActiveButton.tsx
import { Button } from "@/components/ui/button"

type ActiveButtonProps = {
  status: string
  activeFilter: string
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}

const ActiveButton: React.FC<ActiveButtonProps> = ({ status, activeFilter, setActiveFilter }) => {
  return (
    <Button
      variant="outline"
      onClick={() => setActiveFilter(status)}
      className={`${
        activeFilter === status ? "bg-[#D1B574] text-black" : "bg-gray-900 hover:bg-gray-800"
      }`}
    >
      {status}
    </Button>
  )
}

export default ActiveButton
