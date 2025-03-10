# **React Facebook Plugins**  
A simple **React wrapper** for Facebook social plugins, including **Comments, Like Button, Share Button, Page Plugin, and Embedded Posts**.  

🚀 **Easily integrate Facebook social features** into your React applications without manually handling the SDK!  

## **Features**  
✅ **Lightweight**: No unnecessary dependencies.  
✅ **Modular**: Use only the components you need.  
✅ **Reusability**: Uses a shared `useFacebookSDK` hook to **load the SDK only once**.  
✅ **Fully Customizable**: Supports all available attributes for each plugin.  
✅ **Lazy Loading Support**: Improve performance by deferring rendering.  

---

## **Installation**  
Install via npm or yarn:  
```sh
npm install react-facebook-plugins
```
or  
```sh
yarn add react-facebook-plugins
```

---

## **Usage**  

### **1. Facebook Comments Plugin**  
```tsx
import FacebookComments from 'react-facebook-plugins';

const App = () => (
    <FacebookComments url="https://example.com" numPosts={5} width="100%" />
);
```
🔹 **Options**: `numPosts`, `width`, `colorscheme`, `orderBy`, `lazy`, etc.

---

### **2. Facebook Like Button**  
```tsx
import FacebookLikeButton from 'react-facebook-plugins';

const App = () => (
    <FacebookLikeButton url="https://example.com" layout="button_count" size="large" />
);
```
🔹 **Options**: `layout`, `size`, `action`, `showShare`, etc.

---

### **3. Facebook Share Button**  
```tsx
import FacebookShareButton from 'react-facebook-plugins';

const App = () => (
    <FacebookShareButton url="https://example.com" layout="button_count" size="small" />
);
```
🔹 **Options**: `layout`, `size`, `lazy`, etc.

---

### **4. Facebook Page Plugin**  
```tsx
import FacebookPagePlugin from 'react-facebook-plugins';

const App = () => (
    <FacebookPagePlugin 
        pageUrl="https://www.facebook.com/facebook"
        width={380} 
        height={500} 
        tabs="timeline,events"
        showFacepile={true} 
    />
);
```
🔹 **Options**: `tabs`, `hideCover`, `smallHeader`, `lazy`, etc.

---

### **5. Facebook Embedded Post**  
```tsx
import FacebookEmbeddedPost from 'react-facebook-plugins';

const App = () => (
    <FacebookEmbeddedPost url="https://www.facebook.com/facebook/posts/12345" width="500" />
);
```
🔹 **Options**: `width`, `lazy`, `showText`, etc.

---

## **Common Issues & Troubleshooting**  
- **SDK Not Loading?**  
  Ensure the component is inside the React tree when rendered.  
- **Facebook Plugins Not Showing?**  
  Make sure the **URL is public** and not restricted.  
- **Dynamic Content Not Updating?**  
  The Facebook SDK may need to be re-parsed. **Try refreshing the page.**  

---

## **Contributing**  
Pull requests and feature suggestions are welcome! 🚀  

---

## **License**  
This project is **MIT licensed**.  

---

## **Disclaimer**  
**This project is NOT affiliated with, endorsed by, or associated with Facebook, Meta, or any of its products.** It is an independent React library built for easier integration of Facebook plugins.
