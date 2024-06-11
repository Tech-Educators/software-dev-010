import { BatCard } from "./BatCard"

export function Container () {
    const batImgOne = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Craseonycteris_thonglongyai.png'
    const batImgTwo = 'https://upload.wikimedia.org/wikipedia/commons/9/97/Acerodon_jubatus_by_Gregg_Yan.jpg'

    // make three more bats
    
    return (
        <div>
            <BatCard img_url={batImgOne} bat_name='Freddy' bat_location='Your fireplace' />
            <BatCard img_url={batImgTwo} bat_name='Wilma' bat_location='A cave' />
        </div>
    )
}