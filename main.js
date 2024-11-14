const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Varela+Round:wght@400&display=swap";
document.head.appendChild(fontLink);

let blobFrame = null;
let blobFrameContainer = null;

document.addEventListener("keydown", function(blob) {
    if (blob.key == "~" && blob.ctrlKey && !blobFrame) {
        if (blobFrame) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
            return;
        }

        blobFrameContainer = document.createElement("div");
        blobFrameContainer.style.cssText = `
            position: fixed;
            width: 600px;
            height: 400px;
            z-index: 9999;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            background-color: #ffffff;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;

        blobFrame = document.createElement("iframe");
        blobFrame.src = "data:text/html;charset=utf-8,%3C%21DOCTYPE%20html%3E%0D%0A%3Chtml%20lang%3D%22en%22%3E%0D%0A%3Chead%3E%0D%0A%20%20%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0D%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0D%0A%20%20%20%20%3Ctitle%3EBlobeBM%3C%2Ftitle%3E%0D%0A%20%20%20%20%3Cstyle%3E%0D%0A%20%20%20%20%20%20%20%20%40import%20url%28%27https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DVarela%2BRound%26display%3Dswap%27%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20body%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.header%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20space-between%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20black%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%23logo-container%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%23logo%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20max-width%3A%20100px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%2050px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-right%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%23itemListText%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2018px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20%27Varela%20Round%27%2C%20sans-serif%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%23itemInputContainer%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20flex-direction%3A%20column%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%09%23newItemInput%20%7B%0D%0A%20%20%20%09%20%20%20%20width%3A%20calc%28100%25%20%2B%20590px%29%3B%0D%0A%20%20%09%20%20%20%20padding%3A%205px%3B%0D%0A%09%20%20%20%20border-radius%3A%205px%3B%0D%0A%09%20%20%20%20margin-left%3A%20-600px%3B%0D%0A%09%7D%0D%0A%0D%0A%09%40media%20%28max-width%3A%20769px%29%20%7B%0D%0A%20%20%20%20%09%09%23newItemInput%20%7B%0D%0A%20%20%20%20%20%20%20%20%09%09width%3A%20auto%3B%0D%0A%20%20%20%20%20%20%20%20%09%09margin-left%3A%200%3B%0D%0A%20%20%20%20%09%09%09%7D%0D%0A%09%09%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.item-list-container%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20max-height%3A%20calc%28100vh%20-%2075px%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow-y%3A%20auto%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.item-list%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20list-style%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.item%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-bottom%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%201px%20solid%20%23ccc%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.item-button%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23007bff%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%205px%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.remove-button%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23dc3545%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%205px%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-left%3A%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.edit-display-button%2C%20.edit-item-button%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23ffc107%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%205px%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-left%3A%205px%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%23addItemButton%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23008000%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20white%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%205px%2010px%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20border%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20cursor%3A%20pointer%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20.overlay%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20fixed%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100%25%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%20rgba%28255%2C%20255%2C%20255%2C%200.8%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20justify-content%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20align-items%3A%20center%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%20999%3B%0D%0A%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%3C%2Fstyle%3E%0D%0A%3C%2Fhead%3E%0D%0A%3Cbody%3E%0D%0A%20%20%20%20%3Cdiv%20class%3D%22header%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22logo-container%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22itemListText%22%3EBlobeBM%3A%20Bookmarklet%20Runner%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22itemInputContainer%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%20type%3D%22text%22%20id%3D%22newItemInput%22%20placeholder%3D%22Enter%20the%20bookmarklet%20here%22%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbutton%20id%3D%22addItemButton%22%3EAdd%20Bookmarklet%3C%2Fbutton%3E%0D%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22overlay%22%20id%3D%22overlay%22%3E%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cdiv%20class%3D%22item-list-container%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cul%20id%3D%22itemList%22%20class%3D%22item-list%22%3E%3C%2Ful%3E%0D%0A%20%20%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%20%20%3Cscript%3E%0D%0A%20%20%20%20%20%20%20%20document.addEventListener%28%27DOMContentLoaded%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20updatedItemText%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20itemList%20%3D%20document.getElementById%28%27itemList%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20newItemInput%20%3D%20document.getElementById%28%27newItemInput%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20addButton%20%3D%20document.getElementById%28%27addItemButton%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20overlay%20%3D%20document.getElementById%28%27overlay%27%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20addButton.addEventListener%28%27click%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20displayValue%20%3D%20prompt%28%27How%20do%20you%20want%20the%20bookmarklet%20to%20be%20called%3F%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28displayValue%20%3D%3D%3D%20null%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20itemValue%20%3D%20newItemInput.value.trim%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28%21itemValue%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20addItemToList%28displayValue%2C%20itemValue%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20saveItemsToLocalStorage%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItemInput.value%20%3D%20%27%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20addItemToList%28displayValue%2C%20itemValue%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20newItem%20%3D%20document.createElement%28%27li%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItem.className%20%3D%20%27item%27%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20itemButton%20%3D%20document.createElement%28%27button%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.className%20%3D%20%27item-button%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.textContent%20%3D%20displayValue%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.title%20%3D%20itemValue%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.addEventListener%28%27click%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20selectedItemValue%20%3D%20itemButton.title%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20runScript%28selectedItemValue%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20removeButton%20%3D%20document.createElement%28%27button%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20removeButton.className%20%3D%20%27remove-button%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20removeButton.textContent%20%3D%20%27Remove%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20removeButton.addEventListener%28%27click%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemList.removeChild%28newItem%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20saveItemsToLocalStorage%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20editDisplayButton%20%3D%20document.createElement%28%27button%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editDisplayButton.className%20%3D%20%27edit-display-button%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editDisplayButton.textContent%20%3D%20%27Edit%20Name%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editDisplayButton.addEventListener%28%27click%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20newDisplayValue%20%3D%20prompt%28%27Enter%20the%20new%20name%3A%27%2C%20itemButton.textContent%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28newDisplayValue%20%21%3D%3D%20null%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.textContent%20%3D%20newDisplayValue%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20saveItemsToLocalStorage%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20editItemButton%20%3D%20document.createElement%28%27button%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editItemButton.className%20%3D%20%27edit-item-button%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editItemButton.textContent%20%3D%20%27Edit%20Bookmarklet%27%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20editItemButton.addEventListener%28%27click%27%2C%20%28%29%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20newItemValue%20%3D%20prompt%28%27Enter%20the%20new%20bookmarklet%20code%3A%27%2C%20itemButton.title%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28newItemValue%20%21%3D%3D%20null%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemButton.title%20%3D%20newItemValue%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20saveItemsToLocalStorage%28%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItem.appendChild%28itemButton%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItem.appendChild%28removeButton%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItem.appendChild%28editDisplayButton%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20newItem.appendChild%28editItemButton%29%3B%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20itemList.appendChild%28newItem%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20saveItemsToLocalStorage%28%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20items%20%3D%20Array.from%28document.querySelectorAll%28%27.item-button%27%29%29.map%28button%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20button.textContent%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20item%3A%20button.title%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20localStorage.setItem%28%27items%27%2C%20JSON.stringify%28items%29%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20runScript%28selectedItemValue%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20overlay.style.display%20%3D%20%27flex%27%3B%0D%0A%09%09%20%20%20%20%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setTimeout%28%28%29%20%3D%3E%20%7B%0D%0A%09%09%09window.parent.postMessage%28%22run%3A%22%20%2B%20selectedItemValue%2C%20%27%2A%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%20500%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20storedItems%20%3D%20localStorage.getItem%28%27items%27%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28storedItems%29%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20parsedItems%20%3D%20JSON.parse%28storedItems%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20parsedItems.forEach%28item%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20addItemToList%28item.display%2C%20item.item%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D%29%3B%0D%0A%20%20%20%20%3C%2Fscript%3E%0D%0A%3C%2Fbody%3E%0D%0A%3C%2Fhtml%3E";
        blobFrame.style.cssText = `
            width: 100%;
            height: calc(100% - 40px);
            border: none;
            position: absolute;
            top: 40px;
            display: block;
        `;

        const bar = document.createElement("div");
        bar.style.cssText = `
            width: 100%;
            height: 40px;
            background-color: #4CAF50;
            position: relative;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            user-select: none;
            cursor: move;
        `;

        const closeButton = document.createElement("button");
        closeButton.innerText = "×";
        closeButton.style.cssText = `
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 20px;
            color: #fff;
            cursor: pointer;
            transition: color 0.3s ease;
        `;
        closeButton.addEventListener("mouseenter", function() {
            closeButton.style.color = "#046908";
        });
        closeButton.addEventListener("mouseleave", function() {
            closeButton.style.color = "#fff";
        });
        closeButton.addEventListener("click", closeIframe);

        const titleText = document.createElement("div");
        titleText.innerText = "uBlobeBM";
        titleText.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 16px;
            font-family: 'Varela Round', sans-serif;
            user-select: none;
        `;

        bar.appendChild(titleText);
        bar.appendChild(closeButton);

        bar.addEventListener("mousedown", startDragging);

        blobFrameContainer.appendChild(blobFrame);
        blobFrameContainer.appendChild(bar);

        document.body.appendChild(blobFrameContainer);

        requestAnimationFrame(() => {
            blobFrameContainer.style.opacity = "1";
            blobFrameContainer.style.transform = "translate(-50%, -47%) translateY(0)";
        });

        window.addEventListener("message", handleMessage);
    }
});

let offsetX, offsetY;
let isDragging = false;

function startDragging(e) {
    const rect = blobFrameContainer.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    isDragging = true;
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "none";
    blobFrameContainer.style.transition = 'none';
}

function drag(e) {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
    newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);

    blobFrameContainer.style.left = newX + "px";
    blobFrameContainer.style.top = newY + "px";
    blobFrameContainer.style.transform = 'none';
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDragging);
    blobFrame.style.pointerEvents = "auto";
    blobFrameContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

function closeIframe() {
    closeWithAnimation(blobFrameContainer);
    blobFrame = null;
    window.removeEventListener("message", handleMessage);
}

function handleMessage(message) {
    if (message.data.toString().startsWith("run:")) {
        closeWithAnimation(blobFrameContainer);
        blobFrame = null;

        setTimeout(() => {
            try {
                eval(decodeURIComponent(message.data.toString().replace("run:", "")));
            } catch (error) {
            let messageData = message.data.toString().replace("run:", "");
            const replacements = {
                '%20': ' ',
                '%21': '!',
                '%22': '"',
                '%23': '#',
                '%24': '$',
                '%25': '%',
                '%26': '&',
                '%27': "'",
                '%28': '(',
                '%29': ')',
                '%2C': ',',
                '%2E': '.',
                '%2F': '/',
                '%3A': ':',
                '%3B': ';',
                '%3C': '<',
                '%3D': '=',
                '%3E': '>',
                '%3F': '?',
                '%40': '@',
                '%5B': '[',
                '%5D': ']',
                '%5E': '^',
                '%60': '`',
                '%7B': '{',
                '%7C': '|',
                '%7D': '}',
                '%7E': '~',
            };

            for (const [encoded, decoded] of Object.entries(replacements)) {
                messageData = messageData.replace(new RegExp(encoded, 'g'), decoded);
            }

            try {
                eval(messageData);
            } catch (error) {
                    console.error('Error executing bookmarklet:', error.message);
                    alert('An error occured while executing the bookmarklet. Try double checking the code of the bookmarklet. Error: ' + error.message);
              }
           }
        }, 200);
    }
}

function closeWithAnimation(element) {
    element.style.transition = "opacity 0.2s ease";
    element.style.opacity = "0";

    setTimeout(() => {
        element.remove();
    }, 200);
}
