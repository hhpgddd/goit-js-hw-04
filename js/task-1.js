function slugify(title) {
    const correctSlug = title.toLowerCase().split(" ").join("-");
    return correctSlug;
}