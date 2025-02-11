import { Data } from "@/components/Data"
import { Hours } from "@/components/Hours"

export const Clock = () => {
    return (
        <div className="text-9xl text-center mt-10">
            <div>
                <Hours></Hours>
            </div>
            <div>
                <Data></Data>
            </div>
        </div>
    );
}