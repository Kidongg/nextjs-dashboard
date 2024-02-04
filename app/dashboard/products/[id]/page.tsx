import Image from "next/image";
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="10000" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea name="size" placeholder="Big" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
